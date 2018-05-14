<div class="footer">
        <p>&copy; Adambakkam Sri Karpaga Vinayagar Sri Pandurangan Aalayam</p>
 </div>
</div>

 <div class="scrollTop"></div>
 <div class="pre-footer"></div>

<script src="js/scripts.js"></script>
<script>
        $(document).ready(function(){
          $('.slider').bxSlider({
                auto: true,
                autoControls: true,
                stopAutoOnClick: true,
                pager: true         });

                $(document).scroll(function() {
                        var y = $(this).scrollTop();
                        if (y > 800) {
                        $('.scrollTop').fadeIn();
                        } else {
                        $('.scrollTop').fadeOut();
                        }
                 });

                 $('.scrollTop').on('click', function(){
                        $("html, body").animate({ scrollTop: 0 }, "slow");
                 });

                     $(function(){
                                $("ul#ticker01").liScroll();
                        });

        });
      </script>
</body>
</html>