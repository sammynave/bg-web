FROM node:4.4.5

EXPOSE 4200
EXPOSE 49152

WORKDIR /bg-web

ENTRYPOINT ["/usr/local/bin/ember"]
CMD ["ember", "server"]

RUN \
  npm -q install -g ember-cli@2.5.1 &&\
  npm -q install -g bower@1.7.1 &&\
  npm -q install -g phantomjs-prebuilt@2.1.7

# install watchman
RUN \
  git clone https://github.com/facebook/watchman.git &&\
  cd watchman &&\
  git checkout v3.5.0 &&\
  ./autogen.sh &&\
  ./configure &&\
  make &&\
  make install

