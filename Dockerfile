FROM node:14.18.0

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . ./

RUN npm install




# start app
CMD ["npm", "start"]