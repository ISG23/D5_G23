FROM node:latest
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN chmod +x entry-point.sh
ENTRYPOINT ["./entry-point.sh"]