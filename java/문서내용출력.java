package json1.test1;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.OutputStream;

public class Program {

	public static void main(String[] args) {		
		try {			
			File file = new File("C:/Users/admin/Desktop/Hello.java");			
			FileReader file_reader = new FileReader(file);			
			int cur = 0;
			while((cur = file_reader.read()) != -1) {
				System.out.print((char)cur);
			}
			file_reader.close();			
		} catch (Exception e) {
			e.getMessage();
		}	
	}
}
