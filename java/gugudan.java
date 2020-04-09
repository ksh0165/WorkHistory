public class gugudan
{
	public static void main(String[] args){
		int cnt=0;
		do{
			for(int i = 1; i < 10; i++){
				for(int j = 2; j < 10; j++){
					System.out.printf("%d * %d = %d\t",j,i,i*j);

					if(j > 4){
						break;
					}					
				}
				System.out.print("\n");
			}
		}while(cnt>5);
			System.out.print("\n");
			for(int i = 1; i < 10; i++){
				for(int j = 6; j < 10; j++){
					System.out.printf("%d * %d = %d\t",j,i,i*j);
				}
				System.out.print("\n");
			}
		
	}
}
