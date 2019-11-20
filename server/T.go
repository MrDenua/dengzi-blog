package main

import (
	"fmt"
	"math"
	"time"
)

func typeConvert() {
	var a float64 = math.Pi
	var b float32 = float32(a)
	var c uint16 = uint16(b)
	fmt.Println(a, b, c)
}

var (
	MaxInt uint64 = 1<<64 - 1
	Enable bool   = false
) // declare variable out function

func variable2() {
	fmt.Println("Max int=", MaxInt)
	fmt.Println(Enable)
}

func variable() {
	var a, b, c int                    // the same type
	var x, y string = "hello", "world" // init variable value
	z := 123.123                       // auto type
	const cons = "const"               // const can not use := dec

	fmt.Println(a, b, c, x, y, z, cons)
}

// a function
func fun1(a, b int) int {
	return a + b
}

// function with two return param
func swap(a, b int) (int, int) {
	return b, a
}

// function with named return param
func split(num int) (t, s int) {
	t = num / 10
	s = num - t*10
	return // t,s
}

func main() {
	fmt.Println("Hello World")
	fmt.Println("Time ", time.Now())
	fmt.Println(math.Pi)
	fmt.Println("1+2=", fun1(1, 2))

	a, b := swap(1, 2)
	fmt.Println("swap ", a, b)
	fmt.Println(split(42))
	variable()
	variable2()
	typeConvert()
}
