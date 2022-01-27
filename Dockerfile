FROM node:16.11.1 as frontend
WORKDIR /src
COPY yarn.lock ./
RUN yarn install
COPY ./ ./
RUN yarn build

FROM golang:1.17.3 as host
WORKDIR /src
COPY ./host-server/go.* ./
RUN go mod download
COPY ./host-server ./
RUN CGO_ENABLED=0 go build -o /bin/host-server .

FROM busybox:latest
COPY --from=frontend /src/build /var/ui
COPY --from=host /bin/host-server /bin/
ENTRYPOINT ["/bin/host-server"]