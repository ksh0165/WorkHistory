package sc1;

public class Jtest {
	
	public static void main(String[] args) {
	int [] a = {2,5,3,9,8};
		for(int i=0;i<a.length;i++) {
			System.out.print(a[i]+"\t");
		}
		System.out.println();
		
		int [] d = a; // reference assignment
		a[4] = 55;
		for(int i=0;i<a.length;i++) {
			System.out.print(d[i]+"\t");
		}
		System.out.println();
		int [] e = new int[5];
		System.arraycopy(d, 0, e, 0,d.length); // value assignment
		d[4] = 100;
		for(int i=0;i<e.length;i++) {
			System.out.print(e[i]+"\t");
		}
	}	
}

