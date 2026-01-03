package main

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default() // r is for router!
	r.SetTrustedProxies(nil)

	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:5173"},  // CORS only accepts messages from http://localhost:3000
		AllowMethods: []string{"GET", "POST"},            // This router only allows GET or POST.
		AllowHeaders: []string{"Origin", "Content-Type"}, // The header must either be Origin or Content-Type
		MaxAge:       12 * time.Hour,
	}))
	/* c means context, and it means either req or res or both. This is convenient.*/
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	//gin.H represents call out hash map from gin library.
	// map[string]interface{} : map은 object 만들고, key는 string으로 interface{} 는 any를 의미함.
	r.Run(":8080")
}
