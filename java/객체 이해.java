package sc1;

import java.util.*;

// 메소드와 배열의 관계 이해하기
/**
 * @author admin
 *
 */
public class Jtest {
	
	public static void main(String[] args) {
		
		tasks j = new tasks();
		j.speedUp();
		j.speedDown();
		j.speedUp();
		System.out.println(j.curSpeed());
		j.turnDirect(-30);
		j.turnDirect(10);
		System.out.println(j.curDirect());
		
	}
}
class tasks{
	
	private int speed = 0;
	private int direction = 0;
	
	public void speedUp() {
		speed+=5;
	}
	public void speedDown() {
		speed-=5;
	}
	public int curSpeed() {
		return speed;
	}
	public void turnDirect(int dir) {
		direction+=dir;
	}
	public int curDirect() {
		return direction;
	}
}
