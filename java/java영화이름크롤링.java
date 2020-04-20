package sc1;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
public class Jtest {

	public static void main(String[] args) {
		String url = "http://www.cgv.co.kr/movies/";
		Document doc = null;
		try {
			doc = Jsoup.connect(url).get();
		}catch(IOException e) {
			e.printStackTrace();
		}
		Elements element = doc.select("div.sect-movie-chart");
		System.out.println("==========================================");
		Iterator<Element> ie1 = element.select("strong.rank").iterator();
		Iterator<Element> ie2 = element.select("div.box-contents > a").iterator();
		
		while(ie1.hasNext()) {
			String word1=ie1.next().text();
			String word2=ie2.next().text();
			System.out.println(word1+"\t"+word2);
		}
		System.out.println("==========================================");
	}
}
