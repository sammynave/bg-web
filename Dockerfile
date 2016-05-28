FROM node:4.4.5

EXPOSE 4200 35729
WORKDIR /bg-web

# run ember server on container start
ENTRYPOINT ["/usr/local/bin/ember"]
CMD ["server"]

RUN \
  npm install -g ember-cli@2.5.1 &&\
  npm install -g bower@1.7.1 &&\
  npm install -g phantomjs-prebuilt@2.1.7

# install watchman
RUN \
  git clone https://github.com/facebook/watchman.git &&\
  cd watchman &&\
  git checkout v3.5.0 &&\
  ./autogen.sh &&\
  ./configure &&\
  make &&\
  make install

