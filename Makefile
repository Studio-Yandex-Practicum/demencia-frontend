.PHONY: build push

VERSION := 0.2.0

build:
	docker build -t "demencia-limited:${VERSION}" ./
	docker tag "demencia-limited:${VERSION}" "akruglov/demencia-limited:${VERSION}"
	docker tag "demencia-limited:${VERSION}" "akruglov/demencia-limited:latest"

push: build
	docker login
	docker image push "akruglov/demencia-limited:${VERSION}"
	docker image push "akruglov/demencia-limited:latest"
