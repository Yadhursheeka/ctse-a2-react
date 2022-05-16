# pull the official base image
FROM node:14-alpine AS development
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
# expose app
EXPOSE 3000
# start app
CMD ["npm", "start"]