using System;

namespace csQueens
{
  class Program
  {
    static int answers = 0;

    static public void nFor(int w, int[,] grid, int y, int depth, int size)
    {

      if (depth <= 0) return;
      for (int i = 0; i < size; i++)
      {
        if (check(w, grid, y, i))
        {
          grid[y, i] = 1;
          if (depth == 1)
            answers++;
          nFor(w, grid, y + 1, depth - 1, size);
        }
        grid[y, i] = 0;
      }
    }

    static public bool check(int w, int[,] grid, int qY, int qX)
    {
      int n = w;
      //up left
      for (int y = qY - 1, x = qX - 1; y >= 0 && x >= 0; y--, x--)
      {
        if (grid[y, x] == 1) return false;
      }
      //up right
      for (int y = qY - 1, x = qX + 1; y >= 0 && x < n; y--, x++)
      {
        if (grid[y, x] == 1) return false;
      }
      //down left 
      for (int y = qY + 1, x = qX - 1; y < n && x >= 0; y++, x--)
      {
        if (grid[y, x] == 1) return false;
      }
      //down right
      for (int y = qY + 1, x = qX + 1; y < n && x < n; y++, x++)
      {
        if (grid[y, x] == 1) return false;
      }
      //up down
      for (int y = 0; y < n; y++)
      {
        if (y == qY) continue;
        if (grid[y, qX] == 1) return false;
      }
      // left right
      for (int x = 0; x < n; x++)
      {
        if (x == qX) continue;
        if (grid[qY, x] == 1) return false;
      }
      return true;
    }


    static void Main(string[] args)
    {
      System.Console.WriteLine("Leveys?");
      String strLeveys = Console.ReadLine();
      int w = Int32.Parse(strLeveys);

      int[,] grid = new int[w, w];

      for (int i = 0; i < w; i++)
        for (int j = 0; j < w; j++)
          grid[i, j] = 0;

      var watch = System.Diagnostics.Stopwatch.StartNew();
      answers = 0;
      nFor(w, grid, 0, w, w);

      watch.Stop();
      var elapsedMs = watch.ElapsedMilliseconds;

      System.Console.WriteLine("Aika: " + elapsedMs + "ms");

      System.Console.WriteLine("Vastauksia: " + answers);
    }
  }


}
