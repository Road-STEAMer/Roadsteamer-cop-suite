idra_url = "/idra"

Decidim.menu :menu do |menu|
    menu.add_item :root,
        I18n.t("menu.idra", scope: "decidim"),
        idra_url,
        position: 6,
        active: :exclusive
end