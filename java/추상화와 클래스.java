package sc1;

import java.util.*;

// 메소드와 배열의 관계 이해하기
/**
 * @author admin
 *
 */
public class Jtest {
	
	public static void main(String[] args) {
		Tasks t = new Tasks();
		Tasks t1 = new Tasks(1000);
		Tasks t2 = new Tasks(1000);
		
		System.out.println(t1==t2); // 주소가 다르다
		System.out.println(t2.equals(t2)); // 참조 타입은 같다
	}
}
class Tasks{
	
	private double money=500;
	public Tasks (double money) {
		this.money=money;
	}
	public Tasks() {
		
	}
	public double getMoney() {
		return money;
	}
	
	public void withdraw(double amount) {
		if((amount>0)&&(money-amount>=0)) {
			money-=amount;
		}
	}
	public void deposit(double amount) {
		if(amount > 0) {
			money+=amount;
		}
	}
}
