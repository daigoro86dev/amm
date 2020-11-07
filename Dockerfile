FROM ubuntu:18.04

# Install machine dependencies
RUN apt update \
  && apt install -y unzip curl wget git make build-essential g++ \
  && curl -sL https://deb.nodesource.com/setup_12.x | bash - \
  && apt update \
  && apt-get install -y nodejs \
  && echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | tee /etc/apt/sources.list.d/google-chrome.list \
  && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && apt update \
  && apt install -y google-chrome-stable firefox

# Working directory
RUN mkdir /testdir
WORKDIR /testdir

# Install dependencies if any change
COPY package*.json ./
RUN npm install && npm cache clean --force

# Copy tests
COPY . ./

EXPOSE 8080

# Execute tests
CMD ["/bin/sh", "entrypoint.sh"]