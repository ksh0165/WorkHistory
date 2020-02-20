@extends('layouts.app')

@section('content')
    <!-- Create Task Form... -->

    <!-- Current Tasks -->
    @if (count($posts) > 0)
        <div class="panel panel-default">
            <div class="panel-heading">
                Current Tasks
            </div>

            <div class="panel-body">
                <table class="table table-striped task-table">

                    <!-- Table Headings -->
                    <thead>
                        <th>Task</th>
                        <th>&nbsp;</th>
                    </thead>

                    <!-- Table Body -->
                    <tbody>
                        @foreach ($posts as $post)
                            <tr>
                                <!-- Task Name -->
                                <td class="table-text">
                                    <div>{{ $post->title }}</div>
                                </td>
                                <td class="table-text">
                                    <div>{{ $post->description }}</div>
                                </td>

                                    <!-- TODO: Delete Button -->
                                <td>
				    <form action="{{ url('/post/'.$post->id) }}" method="POST">
                                               {{ csrf_field() }}
            				       {{ method_field('DELETE') }}
            					<button type="submit" class="btn btn-danger">
                			    <i class="fa fa-trash"></i> Delete
            				</button>
        			    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    @else
            <!-- Add Task Button -->
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-6">
                    <a href="/post/create">글쓰기</a>
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
            </div>
    @endif
@endsection
