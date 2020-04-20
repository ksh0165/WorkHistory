import java.util.*;
public class Hello {
	public static void main(String[] args){
		int myMoney  = 800;
		int cups = 0;
		if(myMoney >0){
			cups = myMoney/200;
		}else if(myMoney==0){
			cups = 0;
		}else{
			cups=-1;
		}
		
		if(cups>0){
			System.out.println("coffee"+cups);
		}else{
			System.out.println("no money");
		}
	}
}
