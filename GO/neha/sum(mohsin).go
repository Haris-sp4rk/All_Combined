package main

import "fmt"

func main() {
	var num1, num2 int
	fmt.Print("Enter the First Number = ")
	fmt.Scanln(&num1)
	fmt.Print(" \n")

	fmt.Print("Enter the Second Number = ")
	fmt.Scanln(&num2)
	fmt.Print(" \n")

	fmt.Println("The Sum of num1 and num2  = ", num1+num2)
}
