from django.http import HttpResponse
from django.shortcuts import render_to_response
from  jobSubmit.models import Book

def hello(request):
    return HttpResponse("Hello world")


def base(request):
    # currentTime = datetime.datetime.now()+datetime.timedelta(hours=offSet)
    # t = get_template('base.html')
    # html = t.render(context=({'currentTime': now}))
    # return HttpResponse(html)
    path = request.path
    host = request.get_host()
    isecure = request.is_secure()
    return render_to_response('base.html', locals())


def search(request):
    return render_to_response('search_form.html')


def result(request):
    if 'q' in request.GET and request.GET['q']:
        message = request.GET['q']
        books = Book.objects.filter(title__contains=message)
        return render_to_response('search_result.html', ({'book': books, 'query': message}))
    else:
        return render_to_response('search_form.html', ({'error': True}))
