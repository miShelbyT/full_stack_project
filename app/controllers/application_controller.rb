class ApplicationController < ActionController::API

  def testing
    render json: { message: "Success!!"}, status: :ok
  end
end
