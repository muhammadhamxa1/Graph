FROM node:14.18.0

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN npm install

# add app


# start app
CMD ["npm", "start"]