package main

import (
	"fmt"
	"time"
)

var answers = 0

func main() {
	n := 13
	grid := [][]string{}
	for i := 0; i < n; i++ {
		row := []string{}
		for j := 0; j < n; j++ {
			row = append(row, ".")
		}
		grid = append(grid, row)
	}

	// grid[0][2] = "Q"

	// for i := 0; i < n; i++ {
	// 	for j := 0; j < n; j++ {
	// 		fmt.Printf("%s", grid[i][j])
	// 	}
	// 	fmt.Printf("\n")
	// }
	start := time.Now()
	nFor(n, grid, 0, n, n)
	fmt.Println(answers)
	fmt.Println(time.Since(start))
}

func check(n int, grid [][]string, qY int, qX int) bool {
	//up left
	for y, x := qY-1, qX-1; y >= 0 && x >= 0; y, x = y-1, x-1 {
		if grid[y][x] == "Q" {
			return false
		}
	}
	//up right
	for y, x := qY-1, qX+1; y >= 0 && x < n; y, x = y-1, x+1 {
		if grid[y][x] == "Q" {
			return false
		}
	}
	//down left
	for y, x := qY+1, qX-1; y < n && x >= 0; y, x = y+1, x-1 {
		if grid[y][x] == "Q" {
			return false
		}
	}
	//down right
	for y, x := qY+1, qX+1; y < n && x < n; y, x = y+1, x+1 {
		if grid[y][x] == "Q" {
			return false
		}
	}
	//up down
	for y := 0; y < n; y++ {
		if y == qY {
			continue
		}
		if grid[y][qX] == "Q" {
			return false
		}
	}
	// left right
	for x := 0; x < n; x++ {
		if x == qX {
			continue
		}
		if grid[qY][x] == "Q" {
			return false
		}
	}
	return true
}

func nFor(n int, grid [][]string, y int, depth int, size int) {
	if depth <= 0 {
		return
	}
	for i := 0; i < size; i++ {
		if check(n, grid, y, i) {
			grid[y][i] = "Q"
			if depth == 1 {
				answers++
			}
			nFor(n, grid, y+1, depth-1, size)
		}
		grid[y][i] = "."
	}
}
