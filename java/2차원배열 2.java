package sc1;

/**
 * @author admin
 *
 */
public class Jtest {
	
	public static void main(String[] args) {
		int [] a = {8,5,2,4,6,3,7,9};
		int [] b = {8,5,2,4,6,3,7,9};
		int [] c = a; //ref assign copy;
		int [] d = new int[b.length];
		System.arraycopy(b, 0, d, 0, b.length); //value assign copy;
		
		int [] e = (int [])b.clone();
		print(e);
		b[4]=-2;
		print(e);
		
		int [][] fa = {{4,5,6,7},{6,7,8,9}};
		int [][] fb = (int[][])fa.clone();//2차원배열
		fa[0][0] = -1;
		print(fb);
		//1차원배열 clone => value assign copy
		//2차원배열 clone => ref assign copy
		
		int [][] fc = new int[fa.length][fa[0].length];
		for(int i=0;i<fa.length;i++) {
			fc[i]=(int[])fa[i].clone();
		}
		fa[0][0]=-5;
		print(fc);
	}
	public static void print(int [] p) {
		for(int i=0;i<p.length;i++) {
			System.out.print("["+p[i]+"]");
		}
		System.out.println();
	}
	public static void print(int [][] p) {
		for(int i=0;i<p.length;i++) {
			for(int j=0;j<p[i].length;j++) {
				System.out.print("["+p[i][j]+"]");
			}
			System.out.println();
		}
	}
}


