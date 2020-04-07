        var DATA = "";
        var currentData = "";
        var cnt = 0;
        $("input:checkbox[name=hobby]").click(function(){       
            $("input:checkbox[name='hobby']:checked").each(function(){
                currentData = $(this).val();                
            });
            cnt = cnt + 1;
            if(cnt < 4){
            DATA += $(this).val();
            }
        });
        
        
      <div class="fieldlabel"><label>취미</label></div>
        <div class="formfield">
            <input type="checkbox" id="h1" name="hobby" value="독서" alt="취미" style="display: none;"><label for="h1" style="display: inline-block;"><p style="text-align:center;">독서</p></label>
            <input type="checkbox" id="h2" name="hobby" value="낚시" alt="취미" style="display: none;"><label for="h2" style="display: inline-block;"><p style="text-align:center;">낚시</p></label>
            <input type="checkbox" id="h3" name="hobby" value="수영" alt="취미" style="display: none;"><label for="h3" style="display: inline-block;"><p style="text-align:center;">수영</p></label>
            <input type="checkbox" id="h4" name="hobby" value="노래" alt="취미" style="display: none;"><label for="h4" style="display: inline-block;"><p style="text-align:center;">노래</p></label>
            <input type="checkbox" id="h5" name="hobby" value="게임" alt="취미" style="display: none;"><label for="h5" style="display: inline-block;"><p style="text-align:center;">게임</p></label>
            <input type="checkbox" id="h6" name="hobby" value="영화" alt="취미" style="display: none;"><label for="h6" style="display: inline-block;"><p style="text-align:center;">영화</p></label>
            <input type="checkbox" id="h7" name="hobby" value="공연" alt="취미" style="display: none;"><label for="h7" style="display: inline-block;"><p style="text-align:center;">공연</p></label>
            <input type="checkbox" id="h8" name="hobby" value="악기" alt="취미" style="display: none;"><label for="h8" style="display: inline-block;"><p style="text-align:center;">악기</p></label>
        </div>
