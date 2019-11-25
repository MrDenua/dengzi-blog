package main

import "fmt"

type Int int64

func (i Int) add(i2 int64) int64 {
	return int64(i) + i2
}

func typeVar() {
	a := Int(4)
	fmt.Println(a.add(2))
}

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
	typeVar()
}
