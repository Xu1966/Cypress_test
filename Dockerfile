FROM cypress/base:12.8.1

# RUN mkdir /app
WORKDIR /app
RUN apt-get update && apt-get install -y libgbm1

COPY . .

RUN npm install

# RUN ["npx", "cypress", "run"]
# RUN npm install --save-dev cypress

# COPY cypress /app/cypress

# RUN $(npm bin)/cypress verify

# RUN ["npm", "run"]
# CMD ["xvfb-run","npx", "cypress", "run"]
CMD ["npm", "run", "npx cypress run"]