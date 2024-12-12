# frozen_string_literal: true

source "https://rubygems.org"

ruby RUBY_VERSION

gem "decidim", "0.27.2"
# gem "decidim-conferences", "0.27.2"
# gem "decidim-consultations", "0.27.2"
# gem "decidim-elections", "0.27.2"
# gem "decidim-initiatives", "0.27.2"
# gem "decidim-templates", "0.27.2"

gem "truncate_html", "~> 0.9.3"

gem 'figaro'

gem "decidim-decidim_awesome"

gem 'dotenv-rails', groups: [:development, :test]

gem 'decidim-core'

gem "bootsnap", "~> 1.3"

gem "puma", ">= 5.0.0"

gem "faker", "~> 2.14"

gem "wicked_pdf", "~> 2.1"

gem 'erb-formatter'

gem 'devise'

gem "invisible_captcha", "~> 0.13.0"


gem 'decidim-file_authorization_handler'

gem 'decidim-access_requests', git: 'https://github.com/DanieleNoto/decidim-module-access_requests.git', branch: 'main'

gem 'decidim-system'

gem 'decidim-verifications'



group :development, :test do
  gem "byebug", "~> 11.0", platform: :mri
  gem "brakeman"
  gem "decidim-dev", "0.27.2"
end

group :development do
  gem "letter_opener_web", "~> 2.0"
  gem "listen", "~> 3.1"
  gem "spring", "~> 2.0"
  gem "spring-watcher-listen", "~> 2.0"
  gem "web-console", "~> 4.2"
end

group :production do
end
