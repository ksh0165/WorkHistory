package sc1;

import java.util.*;

// 메소드와 배열의 관계 이해하기
/**
 * @author admin
 *
 */
public class Jtest {
	
	public static void main(String[] args) {
		int [] aa = {5,4,7,1,9,12,0,3,2,6};
		for(int en=0;en<aa.length;en++) {
			System.out.println("["+aa[en]+"]");
		}
		System.out.println();
		for(int en : aa) {
			System.out.printf("[%d]",en);
			//System.out.println();
		}
		System.out.println();
		String [] sNames= {"소철","무궁화","개나리","철쭉"};
		for(String sName: sNames) {
			System.out.printf("[%s]",sName);
		}
		System.out.println();
		int [][] bb = {{3,4,5},{7,8,9},{1,2,3}};
		for(int[] outs : bb) {
			for(int ins : outs) {
				System.out.printf("[%d]",ins);
			}
			System.out.println();
		}
		ArrayList<String> list = new ArrayList<String>();
		list.add("소철");
		list.add("무궁화");
		list.add("개나리");
		list.add("철쭉");
		
		for(String sName : list) {
			System.out.printf("[%s]",sName);
		}
	}
}
