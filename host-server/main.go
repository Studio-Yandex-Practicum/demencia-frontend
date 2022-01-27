package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

const (
	defaultPort = ":4041"
)

func main() {
	uiPath := os.Getenv("UI_PATH")
	if uiPath == "" {
		log.Fatalln("UI_PATH variable not found")
	}

	router := makeRouter(uiPath)

	allowedHandlers := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	allowedMethods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"})
	allowedOrigins := handlers.AllowedOrigins([]string{"*"})
	corsRouter := handlers.CORS(allowedHandlers, allowedMethods, allowedOrigins)(router)

	log.Println("Host server for React Burger started")
	log.Fatalf("HTTPS server: %s", http.ListenAndServe(defaultPort, corsRouter))
}

func makeRouter(uiPath string) *mux.Router {
	router := mux.NewRouter()

	fileServer := http.FileServer(http.Dir(uiPath))

	router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", fileServer))
	router.PathPrefix("/").Handler(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		path := filepath.Join(uiPath, "index.html")
		body, _ := ioutil.ReadFile(path)

		fmt.Fprint(w, string(body))
	}))

	return router
}
