from django.shortcuts import render , redirect 
from django.contrib.auth import authenticate , login
from .forms import Create_account_form
from django.http import HttpResponse 
from .models import Create_account 

def index( request ) :
    return render( request , 'index.html' ) 

def sign_in( request ) :
    if( request.method == 'POST' ) :
        user = Create_account.objects.filter( email = request.POST[ "email" ] ).first() 
        print( user )
        if user is not None :
            if( user.check_password(request.POST["password"]) ):
                login(request , user)
                return redirect( 'collect_data' ) 
            else :
                return render(request , 'sign_in.html' , {'error' : "wrong password"})

    return render( request , 'sign_in.html' )

def sign_up( request ):
    if( request.method == 'POST' ) :
        form = Create_account_form( request.POST ) 
        if form.is_valid() :
            user = form.save() 
            return redirect( 'sign_in' ) 
    return render( request , 'user_credentials.html' ) 

def fp_track( request ) :
    return render( request , 'fp_track.html' ) 

def prediction( request ) :
    return render( request , 'prediction.html' ) 

