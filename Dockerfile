#FROM decidim/decidim:0.27.2
FROM ruby:3.0.2

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

WORKDIR /code

RUN apt-get install -y git imagemagick wget \
  && apt-get clean

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - \
 &&  apt-get install -y nodejs \
 && curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | tee /usr/share/keyrings/yarnkey.gpg >/dev/null \
 && echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" |  tee /etc/apt/sources.list.d/yarn.list \
 && apt-get update && apt-get install -y yarn

RUN npm install -g npm@8.19.x
RUN gem install bundler
RUN gem install decidim

#ENV RAILS_ENV=development
ENV RAILS_ENV=production
ENV PORT=3000

COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY . .
RUN bundle install
CMD ["bundle", "exec", "rails", "s", "-b", "0.0.0.0"]