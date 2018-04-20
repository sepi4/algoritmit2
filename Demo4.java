public class Demo4 {
  public static String[] haeSanat(String lause) {
    String[] arr = new String[100];
    String sana = "";
    int j = -1;
    for (int i = 0; i < lause.length(); i++) {
      char x = lause.charAt(i);
      if (x != ' ') {
        sana += x;
      } else if (sana.length() > 0) {
        j++;
        arr[j] = sana;
        sana = "";
      }
    }
    return arr;
  }

  public static void kaanna(String lause, String[] sanat) {
    String str = "";
    int sanaIndex = 0;
    while (sanat[sanaIndex + 1] != null)
      sanaIndex++;

    for (int i = 0; i < lause.length(); i++) {
      char x = lause.charAt(i);
      if (x == ' ') {
        str += x;
      } else {
        str += sanat[sanaIndex];
        sanaIndex--;
        while (lause.charAt(i + 1) != ' ') {
          i++;          
        }
      }
    }
    System.out.println(str);
  }

  public static void main(String[] args) {
    String lause = "  algoritmien opiskelu on   kivaa  ";
    // String lause = "  a  ";
    // String lause = "    ";
    // String lause = "algoritmien opiskelu on kivaa";

    String[] sanat = haeSanat(lause);
    kaanna(lause, sanat);
  }
}