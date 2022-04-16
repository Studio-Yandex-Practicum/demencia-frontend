.PHONY: build push

VERSION := 0.31.0

build:
	docker build -t "demencia:${VERSION}" ./
	docker tag "demencia:${VERSION}" "akruglov/demencia:${VERSION}"
	docker tag "demencia:${VERSION}" "akruglov/demencia:latest"

push: build
	docker login
	docker image push "akruglov/demencia:${VERSION}"
	docker image push "akruglov/demencia:latest"
