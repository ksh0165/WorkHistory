import java.util.Scanner;
import static java.lang.System.out;

public class Ch04Ex01Homework {

	static Scanner scan;
	//static 초기화 블럭 - 생성자 보다 먼저 호출 됨.
	static {
		scan = new Scanner(System.in);
	}
	
	public static void main(String[] args) {
		//학점 변환하기
		int score = 0;
		String grade = "F";
		
		out.print("성적 입력: ");
		score = scan.nextInt();
		
		if(score<0 || score>100) {
			out.println("Error!");
		} else {
			if(score >= 90) {
				grade = "A";
			} else if(score >= 80) {
				grade = "B";
			} else if(score >= 70) {
				grade = "C";
			} else if(score >= 60) {
				grade = "D";
			} else {
				grade = "F";
			}
			
			int c = score%10;
			//!("F".equals(grade))
			if(score>=60) {
				if(c>=7 || score==100) {
					grade += "+";
				} else if(c<=3) {
					grade += "-";
				}
			}
			//쓰레기 값이 들어가면 쓰레기 값이 나온다.
			//사용 할 데이터가 제대로 된 데이터야 한다.
			
			out.printf("%d점은 %s학점입니다.", score, grade);
		}
		
	}

}
#- javac Ch04Ex01Homework.java -encoding utf-8
