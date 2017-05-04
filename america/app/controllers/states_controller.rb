class StatesController < ApplicationController
  def index
    @states = State.all
  end

  def new
    @state = State.new
  end

  def create
    @state = State.create(states_params)
  end

  def show
    @state = State.find(params[:id])
  end

  private

  def states_params
    params.require(:state).permit(:name, :state_bird, :timezone)
  end
end
