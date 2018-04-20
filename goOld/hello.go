package main

import (
	"fmt"
)

func main() {
	fmt.Println("Hello World")
	var age int = 40
	var favNum float64 = 1.287382738

	randNum := 1
	fmt.Println(age, favNum, randNum)

	fmt.Printf("%d \n", 100)
	fmt.Printf("%b \n", 100)
	fmt.Printf("%c \n", 100)
	fmt.Printf("%x \n", 100)
	fmt.Printf("%e \n", 3.28347827348728374)

	fmt.Println("for1")
	i := 1
	for i < 10 {
		fmt.Printf("%d", i)
		i++
	}
	fmt.Println("")

	fmt.Println("for2")
	for index := 0; index < 10; index++ {
		fmt.Printf("%d", index)
	}
	fmt.Println("")

	fmt.Println("arr1")
	arr1 := [5]int64{1, 2, 3, 4, 5}
	for i, value := range arr1 {
		fmt.Println(i, ": ", value)
	}

	fmt.Println("arr1")
	for _, value := range arr1 {
		fmt.Println(value)
	}

	fmt.Println("slice")
	numSlice := []int{5, 4, 3, 2, 1}
	numSlice2 := numSlice[1:4]
	fmt.Println(numSlice2)

	fmt.Println("----------Pointers-------------")

	arr := []int{1, 2, 3, 4, 5, 6, 7, 8}

	for i := 0; i < len(arr); i++ {
		fmt.Println(i, &arr[i])
	}
	// fmt.Println(&arr[0])
	// fmt.Println(&arr[1])
	// fmt.Println(&arr[2])

	// http.HandleFunc("/", handler)
	// http.HandleFunc("/kissa", handler2)
	// http.ListenAndServe(":8080", nil)

}

// func handler(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprintf(w, "Koti\n")
// }
// func handler2(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprintf(w, "Kissa\n")
// }
