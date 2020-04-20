import static java.lang.System.out;

public class Ch04Ex06WhileEx01 {
	public static void main(String[] args) {
		test03();
	}
	
	public static void test03() {
		// 1+1+2+3+5+8+13+21=54
		int prev=0;
		int cur=1;
		int next=1;
		int total=0;
		
		while(cur<=21) {
			out.print(cur + (cur==21?"=":"+"));
			total = total + cur;
			
			next = prev + cur;
			prev = cur;
			cur = next;
		}
		out.println(total);
	}
  }
