package main

import (
	"fmt"
	"math"
)

var answers = 0

func main() {

	nums := []int{1, 2, 3, 4, 5}
	fmt.Println(nums)
	fmt.Println(nums[1:3])
	fmt.Println(nums[1:])
	fmt.Println(nums[:2])

	nums2 := make([]int, 3, 10)
	copy(nums2, nums)
	for x := range nums2 {
		fmt.Println(x)
	}
	fmt.Println("Pituus:", len(nums))

	presAge := make(map[string]int)

	presAge["kissa"] = 23
	fmt.Println(presAge["kissa"])
	presAge["koira"] = 3
	fmt.Println(presAge["koira"])

	fmt.Println("Pituus of map:", len(presAge))
	delete(presAge, "kissa")
	fmt.Println("Pituus of map:", len(presAge))

	fmt.Println(retValues(2, 5))

	funkkari := func(a int, b int) int {
		return 2 + a + b
	}
	fmt.Println(funkkari(2, 4))

	numero := 2
	pointerFunc(&numero) // using pointers
	fmt.Println(&numero)
	fmt.Println(numero)

	// rect := Rect{leftX: 0, topY: 23, height: 111, width: 22}
	// fmt.Println("Rectngele", rect.leftX, rect.topY, rect.height, rect.width)
	// fmt.Println("area", rect.area())

	r := Rect{23, 43}
	c := Circle{22}
	fmt.Println(getArea(r))
	fmt.Println(getArea(c))

	// fmt.Printf("%s", "Leveys: ")
	// var n int
	// _, err := fmt.Scanf("%d", &n)

	// if err != nil {
	// 	fmt.Println(err)
	// }

	// grid := [][]bool{}
	// for i := 0; i < n; i++ {
	// 	row := []bool{}
	// 	for j := 0; j < n; j++ {
	// 		row = append(row, false)
	// 	}
	// 	grid = append(grid, row)
	// }

	// start := time.Now()
	// nFor(n, grid, 0, n, n)
	// fmt.Println("aika", time.Since(start))
	// fmt.Println("leveys:", n)
	// fmt.Println("answers:", answers)
}

func (r Rect) area() float64 {
	return r.width * r.height
}

type Shape interface {
	area() float64
}

type Rect struct {
	height float64
	width  float64
}
type Circle struct {
	radius float64
}

func getArea(s Shape) float64 {
	return s.area()
}

func (c Circle) area() float64 {
	return math.Pi * math.Pow(c.radius, 2)
}

func pointerFunc(x *int) {
	*x *= 2
}

func retValues(num1 int, num2 int) (int, int, int) {
	return num1 * num2, num2 + num1, num1 - num2
}

func check(n int, grid [][]bool, qY int, qX int) bool {
	//up left
	for y, x := qY-1, qX-1; y >= 0 && x >= 0; y, x = y-1, x-1 {
		if grid[y][x] == true {
			return false
		}
	}
	//up right
	for y, x := qY-1, qX+1; y >= 0 && x < n; y, x = y-1, x+1 {
		if grid[y][x] == true {
			return false
		}
	}
	//down left
	for y, x := qY+1, qX-1; y < n && x >= 0; y, x = y+1, x-1 {
		if grid[y][x] == true {
			return false
		}
	}
	//down right
	for y, x := qY+1, qX+1; y < n && x < n; y, x = y+1, x+1 {
		if grid[y][x] == true {
			return false
		}
	}
	//up down
	for y := 0; y < n; y++ {
		if y == qY {
			continue
		}
		if grid[y][qX] == true {
			return false
		}
	}
	// left right
	for x := 0; x < n; x++ {
		if x == qX {
			continue
		}
		if grid[qY][x] == true {
			return false
		}
	}
	return true
}

func nFor(n int, grid [][]bool, y int, depth int, size int) {
	if depth <= 0 {
		return
	}
	for i := 0; i < size; i++ {
		if check(n, grid, y, i) {
			grid[y][i] = true
			if depth == 1 {
				answers++
			}
			nFor(n, grid, y+1, depth-1, size)
		}
		grid[y][i] = false
	}
}
