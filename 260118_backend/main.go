package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type GreetingContent struct {
	Sentence string `json:"sentence,omitempty"`
	Word     string `json:"word,omitempty"`
}

type GreetingData struct {
	Title   []string          `json:"title"`
	Photo   string            `json:"photo"`
	Content []GreetingContent `json:"content"`
}

func main() {
	router := gin.Default()
	greetingData := GreetingData{
		Title: []string{
			"감사 교회 홈페이지를 찾은 모든 성도들에게 ",
			"하나님의 은혜가 넘치시기를 기도합니다.",
		},
		Photo: "/images/profile_image.png",
		Content: []GreetingContent{
			{Sentence: "감사 교회는 하나님께서 이 시대 가운데 거룩한 구원의 역사와 진정한 부흥을 일으키시기 위해 세우신 교회입니다."},
			{Sentence: "처음 시작할 때의 교회 이름을 '좁은문 교회'였습니다."},
			{Sentence: "모두 다 넓은 길로 가고자 하는 시대에 좁은 길로 가고자 시작한 교회이기 때문입니다."},
			{Sentence: "철저한 회개와 성령의 거듭나게 하시는 은혜로 구원 받은 성도들이 모이는 교회, 그리하여 참된 성도의 거짓 없는 사랑의 교제가 있는 교회가 되는 것이 처음의 소망이자, 소명이었습니다."},
			{Sentence: "그동안 이러한 시도는 필연적으로 큰 보람과 동시에 많은 어려움을 가져다주었습니다."},
			{Sentence: "철저히 세속화한 사회, 그리고 교회 못지않게 세속화된 교계 현실에서 철저한 회개와 거룩한 삶의 강조는 결코 쉽지만은 않은 것임을 절감하였습니다."},
			{Sentence: "하나님께서 감사 교회를 세우신 뜻은 반드시 성취되리라고 굳게 믿고 있습니다."},
			{Sentence: "우리가 주님을 부인하지 않는 한 주님께서는 결코 우리를 부인하시지 않으실 것이 분명하기 때문입니다."},
			{Sentence: "그보다 더 확신하는 것은 우리 가운데 선한 일을 시작하신 분이 그리스도 예수의 날까지 지키시고 이루실 것이기 때문입니다(빌 1:6)."},
			{Sentence: "모세와 함께하시고, 여호수아와 함께 하시고, 엘리야와 함께하시고,<br/>사도 바울과 함께 하셨던 하나님께서는 지금도 우리와 함께 하십니다."},
			{Word: "너희는 두려워 말고 가만히 서서, 여호와께서 오늘날 너희를 위하여 행하시는 구원을 보라.'(출 14:13)"},
		},
	}

	router.GET("/api/greeting", func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		c.JSON(http.StatusOK, greetingData)
	})

	router.Run(":8080")
}
