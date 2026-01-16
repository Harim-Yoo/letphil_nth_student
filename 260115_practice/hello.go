package main

import (
	"fmt"
	"slices"
)

func main() {
	var s []string
	fmt.Println("uninit", s, s == nil, len(s) == 0)

	s = make([]string, 3)
	fmt.Println("emp", s, s == nil, len(s) == 0)

	s[0] = "a"
	s[1] = "b"
	s[2] = "c"
	s = append(s, "d")
	s = append(s, "e", "f")
	fmt.Println(s)

	c := make([]string, len(s))
	copy(c, s)
	fmt.Println(c)
	l := s[2:5]
	fmt.Println(l)
	l = s[:5]
	fmt.Println(l)
	l = s[2:]
	fmt.Println(l)

	t := []string{"g", "h", "i"}
	fmt.Println(t)
	k := []string{"a", "b", "c"}
	if slices.Equal(t, k) {
		fmt.Println("k equals t")
	} else {
		fmt.Println("k does not equal t")
	}

	twoD := make([][]int, 3)
	for i := range 3 {
		innerLen := i + 1
		twoD[i] = make([]int, innerLen)
		for j := range innerLen {
			twoD[i][j] = i + j
		}
	}
	fmt.Println(twoD)
}
