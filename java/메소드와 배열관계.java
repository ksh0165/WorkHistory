package sc1;
// 메소드와 배열의 관계 이해하기
/**
 * @author admin
 *
 */
public class Jtest {
	
	public static void main(String[] args) {
		int a=5;
		int b=6;
		copyVInt(a,b);
		
		System.out.println(a); // immutable
		System.out.println(b); // immutable
		multi(a);				// immutable
		System.out.println(a); // immutable
		
		int [] aa = {5,4,7,1,9,12,0,3,2,6};
		int [] bb = new int[aa.length];
		int [] cc = {5,4,7,1,9,12,0,3,2,6};
		int [] dd = new int[cc.length];
		
		copyR(aa,bb); // 복사안됨
		print(bb);
		copyRChange(aa,bb); //변경할 수 있다.
		print(aa);
		print(bb);
		bbsort(aa); //변경함
		print(aa);
		print(dd);
		copyV(cc,dd);
		print(dd);
		}
	public static void copyV(int [] q, int [] p) {
		for(int i=0; i<q.length;i++) {
			p[i]=q[i];
		}
	}
	public static void bbsort(int [] a) {
		int n = a.length;
		for(int i = 0; i<n-1;i++) {
			for(int j=0;j<n-1-i;j++) {
				if(a[j]>a[j+1]) {
				int temp=a[j+1];
				a[j+1]=a[j];
				a[j]=temp;
				}
			}
		}
	}
	public static void copyR(int [] q, int [] p) {
		p=q;
	}
	public static void copyRChange(int [] q, int [] p) {
		p=q;
		p[0]=35;
	}
	public static void copyVInt(int q, int p) {
		p=q;
	}
	public static void multi(int q) {
		q=q*10;
	}
	public static void print(int [] p) {
		for(int i=0;i<p.length;i++) {
			System.out.print("["+p[i]+"]");
		}
		System.out.println();
	}
}


