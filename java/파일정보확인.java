import java.io.*;
import java.util.*;
public class Jmain {

	public static void main(String[] args) {
		try {
			printDirectory("C:\\Users\\admin\\Desktop\\Hello.java");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public static void printDirectory(String fname)throws IOException{
		File f=new File(fname);
		if(f.exists()) {
			System.out.println("절대경로: "+f.getAbsolutePath());
			System.out.println("(대문자)절대경로: "+f.getCanonicalPath());
			System.out.println("수정날짜: "+new Date(f.lastModified()));
			System.out.println("Read가능? "+f.canRead());
			System.out.println("Write가능? "+f.canWrite());
			if(f.isDirectory()) {
				System.out.println("디렉토리인가? "+f.isDirectory());
				File []fs = f.listFiles();
				for(int i=0; i<fs.length;i++) {
					if(fs[i].isDirectory()) {
						System.out.println(fs[i].getAbsoluteFile());
					}
				}
			}else {
				System.out.println("파일이름: "+f.getName());
				System.out.println("파일길이: "+f.length()+"byte");
				System.out.println("숨긴 파일인가? "+f.isHidden());
				System.out.println("파일구분문자 "+File.pathSeparatorChar);
				System.out.println("경로구분문자 "+File.separator);
			}
		}else {
			System.out.println(fname+"이 없습니다.");
			System.exit(1);
		}
	}
}
