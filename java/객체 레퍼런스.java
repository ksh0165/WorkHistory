package sc1;

import java.util.*;

// 메소드와 배열의 관계 이해하기
/**
 * @author admin
 *
 */
public class Jtest {
	
	public static void main(String[] args) {
		Tasks t = new Tasks(1000);
		t.deposit(3000);
		t.deposit(2000);
		t.withdraw(500);
		System.out.println(t.getMoney());
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
