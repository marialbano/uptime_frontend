FROM node:10
# Create app directory
WORKDIR /usr/src/app
RUN git clone git@github.com:marialbano/uptime_frontend.git
RUN cd uptime_frontend
COPY package*.json ./
# If building code for production RUN npm ci --only=production
RUN npm install
# Copy the other files to image
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]