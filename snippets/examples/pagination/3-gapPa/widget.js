 //有间距的分页
 var paginationGap = document.getElementById('paginationGap');
 var comp = new u.pagination({ el: paginationGap, jumppage: true });
 comp.update({ totalPages: 100, pageSize: 20, currentPage: 1, totalCount: 200 });
