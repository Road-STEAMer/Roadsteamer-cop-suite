class IdraController < Decidim::ApplicationController
  def index
    url = URI("https://idra.ecosystem-urbanage.eu/Idra/api/v1/client/search")
    https = Net::HTTP.new(url.host, url.port)
    https.use_ssl = true

    #form

    if params[:search].present?
      search_value = params[:search]
    else
      search_value = ""
    end

    @search_value = search_value

    selected_option = params[:field] || "title"

    field = params[:field].presence || "title"

    @rows = params[:rows].presence || "5"

    @start = params[:start] || "0"

    start = @start.to_i

    @nodes = []

    catalogues_info_url = URI("https://idra.ecosystem-urbanage.eu/Idra/api/v1/client/cataloguesInfo")
    catalogues_info_https = Net::HTTP.new(catalogues_info_url.host, catalogues_info_url.port)
    catalogues_info_https.use_ssl = true

    catalogues_info_request = Net::HTTP::Get.new(catalogues_info_url)

    catalogues_info_response = catalogues_info_https.request(catalogues_info_request)

    catalogues_info_data = JSON.parse(catalogues_info_response.body)

    if params[:search].present?
      catalogues_info_data.each do |catalogue_info|
        id = catalogue_info["id"]
        @nodes << id.to_i
      end
    end

    filters = [{
      "field": "ALL",
      "value": search_value,
    }]

    @tags_value = params[:tags_value]

    if @tags_value.present?
      filters.push(
        {
          "field": "tags",
          "value": @tags_value.start_with?(",") ? @tags_value[1..-1] : @tags_value,
        }
      )
    end

    @formats_value = params[:formats_value]

    if @formats_value.present?
      filters.push(
        {
          "field": "distributionFormats",
          "value": @formats_value.start_with?(",") ? @formats_value[1..-1] : @formats_value,
        }
      )
    end

    @licenses_value = params[:licenses_value]

    if @licenses_value.present?
      filters.push(
        {
          "field": "distributionLicenses",
          "value": @licenses_value.start_with?(",") ? @licenses_value[1..-1] : @licenses_value,
        }
      )
    end

    @catalogues_value = params[:catalogues_value]

    if @catalogues_value.present?
      filters.push(
        {
          "field": "catalogues",
          "value": @catalogues_value.start_with?(",") ? @catalogues_value[1..-1] : @catalogues_value,
        }
      )
    end

    @categories_value = params[:categories_value]

    if @categories_value.present?
      filters.push(
        {
          "field": "categories",
          "value": @categories_value.start_with?(",") ? @categories_value[1..-1] : @categories_value,
        }
      )
    end

    deleted_filter = params[:deleted_filter]

    request = Net::HTTP::Post.new(url)
    request["Content-Type"] = "application/json"
    request.body = JSON.dump({
      "filters": filters,
      "live": false,
      "sort": {
        "field": field,
        "mode": "asc",

      },
      "rows": @rows.to_i,
      "start": start,
      "nodes": @nodes,
      "euroVocFilter": {
        "euroVoc": false,
        "sourceLanguage": "",
        "targetLanguages": [],
      },
    })

    response = https.request(request)

    @api_results = JSON.parse(response.read_body)

    @total_results = @api_results["count"]

    #  metodi filtri:

    @selected_filters = []

    @deleted_filters = []

    @limit = 10

    if @api_results.size > 0
      @tags = @api_results["facets"][0]
      @formats = @api_results["facets"][1]
      @licenses = @api_results["facets"][2]
      @catalogues = @api_results["facets"][3]
      @categories = @api_results["facets"][4]
    end

    @tags_values = @tags["values"]
    @formats_values = @formats["values"]
    @licenses_values = @licenses["values"]
    @catalogues_values = @catalogues["values"]
    @categories_values = @categories["values"]

    if params[:tags_value].present?
      @selected_filters << params[:tags_value].split(",")
    end

    if params[:formats_value].present?
      @selected_filters << params[:formats_value].split(",")
    end

    if params[:licenses_value].present?
      @selected_filters << params[:licenses_value].split(",")
    end

    if params[:catalogues_value].present?
      @selected_filters << params[:catalogues_value].split(",")
    end

    if params[:categories_value].present?
      @selected_filters << params[:categories_value].split(",")
    end

    if params[:deleted_filter].present?
      @selected_filters.delete(deleted_filter)
    end

    @datasets = SavedDataset.all
    @element_count = SavedDataset.count

    @list = [] 
    
    @datasets.each do |data|
      @list << data.title
    end


    render "layouts/idra/index.html.erb"
  end

  def create
    selected_title = params[:selected_titles]
    existing_dataset = SavedDataset.find_by(title: selected_title)

    if existing_dataset
      existing_dataset.destroy
    else
      saved_dataset = SavedDataset.create(title: selected_title)

      @datasets = SavedDataset.all
    end

    
  end

  def update
    @datasets = SavedDataset.all
    respond_to do |format|
      format.html { render partial: "layouts/idra/datasets_list", layout: false } 
    end
  end

  
end
