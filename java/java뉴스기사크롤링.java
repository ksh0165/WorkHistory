// https://hc.apache.org/downloads.cgi
//- commons-logging-1.2.jar
// - httpclient-4.5.2.jar
// - httpcore-4.4.4.jar
// Jsoup은 https://jsoup.org/download 여기서 다운받기
package sc1;
import java.io.IOException; 
import org.jsoup.Jsoup; 
import org.jsoup.nodes.Document; 
import org.jsoup.nodes.Element; 
import org.jsoup.select.Elements;

public class Jtest {
	
	public static void main(String[] args) {
		String url="https://sports.news.naver.com/wfootball/index.nhn";
		Document doc = null;
		
		try {
			doc = Jsoup.connect(url).get();
		}catch(IOException e) {
			e.printStackTrace();
		}
		
		Elements element = doc.select("div.home_news");
		String title = element.select("h2").text().substring(0,4);
		System.out.println("========================================");
		System.out.println(title);
		System.out.println("========================================");
		for(Element el : element.select("li")) {
			System.out.println(el.text());
		}
		System.out.println("========================================");
	}
	
}

