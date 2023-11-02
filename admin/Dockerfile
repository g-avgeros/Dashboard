FROM node:latest as build

WORKDIR /Users/Apostolis S/OneDrive/Desktop/uni-ang/Dashboard/admin

COPY ./ /Users/Apostolis S/OneDrive/Desktop/uni-ang/Dashboard/admin/

RUN npm install

RUN npm run build

FROM nginx:latest

COPY --from=build /Users/Apostolis S/OneDrive/Desktop/uni-ang/Dashboard/admin/dist/admin 

EXPOSE 80