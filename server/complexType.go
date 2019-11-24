package main

import "fmt"

type Man struct {
	NAME string
	AGE  int
}

func struct_() {
	fmt.Println(Man{"Bob", 25})
}

func pointer() {
	var p *int // a pointer
	fmt.Println(p)

	a := 1
	var p2 = &a
	fmt.Println(a)
	fmt.Println(p2)

	*p2 = 2
	fmt.Println(a)
}

func main() {
	pointer()
	struct_()
}
