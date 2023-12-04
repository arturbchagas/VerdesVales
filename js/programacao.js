$(function(){
    $(document).ready(function(){
        $('.dia-btn').on('click',function(){
            var dia = $(this).data('dia');
            $('.tabela-dia').hide();
            $('#tabela-'+ dia).show();
            $('#titulo-'+ dia).show();
        })
    })
}
)