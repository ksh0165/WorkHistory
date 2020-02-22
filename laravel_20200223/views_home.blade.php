// select-> option value show
@extends('layouts.admin')

@section('content')
<div class="content">
    <div class="row">
        <div class="col-lg-12">
                        <form method="post" action="test1">
                                {{ csrf_field() }}
                         연예인 : <select name="order">
                                <option value="jyp">수지</option>
                                <option value="red">아이린</option>
                                <option value="velvet">조이</option>
                                </select>
                                <br/>
                                <input type="submit" value="선택">
                                </form>
                                @csrf
                        {{ $talent ?? '' }}
        </div>
    </div>
</div>
@endsection
@section('scripts')
@parent

@endsection
